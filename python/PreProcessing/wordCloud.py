# This is unfinished !!!
import json
from collections import defaultdict
import re

def load_data(filepath):
    with open(filepath, 'r') as file:
        return json.load(file)

def preprocess_data(messages):
    word_counts = defaultdict(lambda: defaultdict(int))
    for message in messages:
        sender = message['Sender']
        words = re.findall(r'\b\w+\b', message['Message'].lower())
        for word in words:
            word_counts[sender][word] += 1
    return word_counts

if __name__ == "__main__":
    messages = load_data('path_to_your_messages.json')
    processed_data = preprocess_data(messages)
