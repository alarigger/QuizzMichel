import os
import re
import json
import argparse

from model import Quiz, Question, Content, Option,Audio,Category,Background,QuizOptions


IMAGE_EXTS = {".png", ".jpg", ".jpeg", ".gif", ".webp"}
TEXT_EXTS = {".txt"}
AUDIO_EXTS = {".mp3"}


def get_content_type(filename):
    ext = os.path.splitext(filename)[1].lower()

    if ext in IMAGE_EXTS:
        return "image"

    if ext in TEXT_EXTS:
        return "text"

    if ext in AUDIO_EXTS:
        return "audio"

    return None


def make_content(filename):
    content_type = get_content_type(filename)

    if content_type is None:
        return None

    return Content(
        type=content_type,
        value=filename
    )


def infer_category(question_name):
    match = re.match(r"([A-Za-z]+)", question_name)
    if match:
        category =match.group(1)
        #print(category)
        return match.group(1)

    return "Unknown"


def infer_points(question_name):
    match = re.search(r"(\d+)$", question_name)

    if match:
        points = int(match.group(1)) * 100
        #print(points)
        return int(match.group(1)) * 100

    return 100


def parse_audio(audio_dir):
    name = os.path.basename(audio_dir)
    audio = Audio(name=name)
    for filename in sorted(os.listdir(audio_dir)):
        content = make_content(filename)
        if content:
            audio.sound.append(content)

    return audio

def parse_background(background_dir):
    name = os.path.basename(background_dir)

    bg = Background(name=name)

    for filename in sorted(os.listdir(background_dir)):
        content = make_content(filename)

        if content:
            bg.image.append(content)

    return bg



def parse_category(category_dir):
    name = os.path.basename(category_dir)
    
    #print(name)

    category = Category(name=name)

    for filename in sorted(os.listdir(category_dir)):
        content = make_content(filename)

        if not content:
            continue

        lower = filename.lower()
        
        if lower.startswith("data."):
            category.title.append(content)

        if lower.startswith("title."):
            category.title.append(content)        

        elif lower.startswith("background."):
            category.background.append(content)

        elif lower.startswith("description."):
            category.description.append(content)

        elif lower.startswith("music."):
            category.music.append(content)

        else:
            if content.type == "image":
                category.images.append(content)

    return category

def parse_question(question_dir):
    question_name = os.path.basename(question_dir)
    #print(question_name)

    question = Question(
        name=question_name,
        categories=[infer_category(question_name)],
        points=infer_points(question_name)
    )

    files = sorted(os.listdir(question_dir))
    
    # Question.*
    for filename in files:
        if filename.startswith("config."):
            ...

    # Question.*
    for filename in files:
        if filename.startswith("Question."):
            content = make_content(filename)

            if content:
                question.content.append(content)

    # Answer.*
    for filename in files:
        if filename.startswith("Answer."):
            content = make_content(filename)

            if content:
                question.correction.append(content)

    # Correct.*
    for filename in files:
        if filename.startswith("Correct"):
            content = make_content(filename)

            if content:
                question.options.append(
                    Option(
                        content=[content],
                        valid=True
                    )
                )

    # Incorrect.*
    for filename in files:
        if filename.startswith("Incorrect"):
            content = make_content(filename)

            if content:
                question.options.append(
                    Option(
                        content=[content],
                        valid=False
                    )
                )

    return question


def build_quiz(quizz_name,folder):
    

    root = os.path.join(folder, "data")

    quiz = Quiz(name=quizz_name)

    options_file = os.path.join(root, "options.json")

    if os.path.exists(options_file):

        with open(options_file, "r", encoding="utf-8") as f:
            data = json.load(f)
        quiz.options = QuizOptions(
            shuffle_options=data.get("shuffle_options", False),
            question_limit=data.get("question_limit", 0)
        )
        quiz.teams = data.get("teams", [])
        
    


    # BACKGROUNDS
    background_root = os.path.join(root, "background")

    if os.path.exists(background_root):
        for entry in sorted(os.listdir(background_root)):
            path = os.path.join(background_root, entry)

            if os.path.isdir(path):
                quiz.backgrounds.append(parse_background(path))

    # CATEGORIES
    category_root = os.path.join(root, "category")

    if os.path.exists(category_root):
        for entry in sorted(os.listdir(category_root)):
            path = os.path.join(category_root, entry)

            if os.path.isdir(path):
                quiz.categories.append(parse_category(path))

    # QUESTIONS
    question_root = os.path.join(root, "question")

    if os.path.exists(question_root):
        for entry in sorted(os.listdir(question_root)):
            path = os.path.join(question_root, entry)

            if os.path.isdir(path):
                #print(path)
                question = parse_question(path)
                quiz.questions.append(question)
                #print(question)
                

    # AUDIO
    audio_root = os.path.join(root, "audio")

    if os.path.exists(audio_root):
        for entry in sorted(os.listdir(audio_root)):
            path = os.path.join(audio_root, entry)

            if os.path.isdir(path):
                quiz.audio.append(parse_audio(path))

    return quiz


def generate_data_json(quiz_name:str,folder:str):

    quiz = build_quiz(quiz_name,folder)

    output_file = os.path.join(
        folder,
        "data.json"
    )
    
    #print(output_file)

    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(
            quiz.to_dict(),
            f,
            indent=4,
            ensure_ascii=False
        )

    #print(f"Generated {output_file}")

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("quizz_name")

    args = parser.parse_args()

    quiz = build_quiz(args.quizz_name)
    
    

    output_file = os.path.join(
        "quizzes",
        args.quizz_name,
        "data.json"
    )
    
    #print(output_file)

    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(
            quiz.to_dict(),
            f,
            indent=4,
            ensure_ascii=False
        )

    #print(f"Generated {output_file}")


if __name__ == "__main__":
    main()
