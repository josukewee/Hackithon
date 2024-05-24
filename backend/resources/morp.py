import json

import nltk
from collections import Counter
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
import string

# Download stopwords if not already downloaded
nltk.download('punkt')
nltk.download('stopwords')



def main():
    topics = []

    with open('./topics.json', 'r') as f:
        data = json.loads(f.read())

        print(data)

        for row in data:
            tokens = word_tokenize(row)

        # Preprocess the text
        # Convert to lowercase
        data = data.lower()

        # Remove punctuation and stopwords
        tokens = [word for word in tokens if word.isalpha()]
        stop_words = set(stopwords.words('czech'))  # Specify the Czech stopwords
        tokens = [word for word in tokens if word not in stop_words]

        # Count the occurrences of each word
        word_counts = Counter(tokens)

        # Display the most common words
        most_common_words = word_counts.most_common(10)  # Change the number as needed
        most_common_words

        # Preprocess the text

        # Convert to lowercase

        # Tokenize the text

if __name__ == "__main__":
    main()
