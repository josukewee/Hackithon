import json

INFO_KEY = "Informace na úřední desce"
IGNORE_WORD_PARTS = ["SML"]


def main():

    topics = []

    with open('./dataset.json', 'r') as f:
        data = f.read()
        parsed = json.loads(data)

        for info in parsed['informace']:
            if INFO_KEY in info['typ']:
                if any(word in info['název']['cs'] for word in IGNORE_WORD_PARTS):
                    continue
                topics.append(info['název']['cs'])

    with open('./topics.json', 'w') as f:
        json.dump(topics, f, indent=4)

if __name__ == "__main__":
    main()