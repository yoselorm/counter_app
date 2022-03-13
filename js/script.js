
window.addEventListener("load", () => {
    (function() {

        document.getElementById('text-field').addEventListener("input", function(e) {
            // Text Field Value
            var text = document.getElementById('text-field').value
                // Count Variables
            var totalChar = 0;
            var totalChar_em = 0;
            var totalWwords = 0;
            var totalPar = 0;

            // Removing the spaces for counting the characters without the spaces
            var chars = text.replace(/\s/gi, '')

            //Splitting the words using the spaces as the delimiter
            var words = (text.trim()).split(/\s/gi)

            //Splitting the words using the next line as the delimiter
            var paragraphs = (text.trim()).split(/[\n\r]+/gi)

            // removing the empty strings in the word array
            Object.keys(words).map(k => {
                if (words[k].trim() == "") {
                    delete words[k];
                }
            })
            words = words.filter((v) => {
                return v.length > 0;
            })

            
            totalChar = text.length
            totalChar_em = chars.length
            totalWwords = words.length
            totalPar = paragraphs.length

            document.getElementById('total-characters').innerText = parseFloat( totalChar).toLocaleString('en-US')
            document.getElementById('total-characters-ns').innerText = parseFloat(totalChar_em).toLocaleString('en-US')
            document.getElementById('total-words').innerText = parseFloat(totalWwords).toLocaleString('en-US')
            document.getElementById('total-paragraphs').innerText = parseFloat(totalPar).toLocaleString('en-US')
        })
    })();
})