

        function generateMessage() {
            const message = document.getElementById('message').value.trim();
            const count = parseInt(document.getElementById('count').value);
            const output = document.getElementById('output');
            const printBtn = document.getElementById('printBtn');
            
            if (!message) {
                alert("Please enter a message first!");
                return;
            }
            
            if (isNaN(count) || count < 1) {
                alert("Please enter a valid number (1-100)!");
                return;
            }
            
            let result = "";
            for (let i = 0; i < count; i++) {
                result += `${message}\n`;
            }
            
            output.textContent = result;
            printBtn.disabled = false;
        }
        
        function clearAll() {
            document.getElementById('message').value = "";
            document.getElementById('count').value = "5";
            document.getElementById('output').textContent = "Your generated messages will appear here...";
           
        }