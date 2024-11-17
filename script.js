document.getElementById('textForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page
    document.getElementById('loading').style.display = 'block'; // Show loading animation
    setTimeout(() => {
        summarizeText();
    }, 1000); // Simulate a delay for loading animation
});

document.getElementById('themeSwitch').addEventListener('change', function(event) {
    if (event.target.checked) {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
    } else {
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
    }
});

document.getElementById('copyButton').addEventListener('click', function() {
    const summaryText = document.getElementById('summary').innerText;
    navigator.clipboard.writeText(summaryText).then(() => {
        alert('Summary copied to clipboard!');
    }).catch(err => {
        alert('Failed to copy: ', err);
    });
});

document.getElementById('inputText').addEventListener('input', function() {
    const wordCount = this.value.split(/\s+/).filter(word => word.length > 0).length;
    document.getElementById('wordCount').innerText = `Word Count: ${wordCount}`;
});

function summarizeText() {
    const text = document.getElementById('inputText').value;
    const summaryLength = document.getElementById('summaryLength').value;

    // Define number of sentences based on summary length
    let maxSentences;
    if (summaryLength === 'short') {
        maxSentences = 2;
    } else if (summaryLength === 'medium') {
        maxSentences = 5;
    } else {
        maxSentences = 10;
    }

    // Split the text into sentences
    const sentences = text.match(/[^\.!\?]+[\.!\?]+/g);
    if (!sentences) {
        document.getElementById('summary').innerText = "Please enter valid text.";
        document.getElementById('loading').style.display = 'none'; // Hide loading animation
        return;
    }

    // Calculate word frequencies
    const wordCounts = {};
    const words = text.match(/\w+/g);
    words.forEach(word => {
        word = word.toLowerCase();
        wordCounts[word] = (wordCounts[word] || 0) + 1;
    });

    // Score sentences based on word frequencies and sentence position
    const sentenceScores = sentences.map((sentence, index) => {
        const words = sentence.match(/\w+/g) || [];
        let score = 0;
        words.forEach(word => {
            word = word.toLowerCase();
            if (wordCounts[word]) {
                score += wordCounts[word];
            }
        });

        // Add additional score based on the position of the sentence (e.g., first sentence gets more weight)
        score += (sentences.length - index) / sentences.length;
        return { sentence, score };
    });

    // Sort sentences by score and select the top ones
    const sortedSentences = sentenceScores.sort((a, b) => b.score - a.score);
    const summary = sortedSentences.slice(0, maxSentences).map(item => item.sentence).join(' ');

    // Display the summary
    document.getElementById('summary').innerText = summary;
    document.getElementById('loading').style.display = 'none'; // Hide loading animation

    // Show copy button and word count
    document.getElementById('copyButton').style.display = 'inline-block';
    const summaryWordCount = summary.split(/\s+/).filter(word => word.length > 0).length;
    document.getElementById('wordCount').innerText = `Input Word Count: ${words.length}, Summary Word Count: ${summaryWordCount}`;
}
