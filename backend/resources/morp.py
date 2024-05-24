import json

import nltk
from collections import Counter

from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from stopwordsiso import stopwords


# Download stopwords if not already downloaded
nltk.download('punkt')
nltk.download('stopwords')


def update_words_list(tup, di):
    for a, b in tup:
        di.setdefault(a, []).append(b)
    return di


def main():
    topics = []

    res = {

    }

    with open('./topics.json', 'r') as f:
        data = json.loads(f.read())

        print(data)

        for row in data:
            tokens = word_tokenize(row)
            stop_words = set(stopwords("cz"))
            tokens = [word for word in tokens if word not in stop_words]
            word_counts = Counter(tokens)
            most_common_words = word_counts.most_common(10)  # Change the number as needed
            print(tokens)

            update_words_list(most_common_words, res)


    res = dict(sorted(res.items(), key=lambda item: len(item[1]), reverse=True))
    word_counts = {}

    for key, value in res.items():
        v = zip(value)
        print(key, value)


if __name__ == "__main__":
    main()
