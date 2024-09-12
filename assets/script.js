const loanAmountInput = document.getElementById('loanAmount');
        const tenureInput = document.getElementById('tenure');
        const interestButtons = document.querySelectorAll('.interest-button');
        const calculateBtn = document.getElementById('calculateBtn');
        const resultsDiv = document.getElementById('results');
        const emiTableBody = document.querySelector('#emiTable tbody');
        const totalInterestSpan = document.getElementById('totalInterest');
        const totalPayableSpan = document.getElementById('totalPayable');
        const canvas = document.getElementById('pieChart');
        const ctx = canvas.getContext('2d');
        let interestRate = 27.5;
        interestButtons.forEach(button => {
            button.addEventListener('click', () => {
                interestButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                interestRate = parseFloat(button.dataset.rate);
            });
        });
        calculateBtn.addEventListener('click', calculateEMI);
        function calculateEMI() {
            const loanAmount = parseFloat(loanAmountInput.value);
            const tenure = parseInt(tenureInput.value);
            const r = interestRate / 1200;
            const emi = loanAmount * r * Math.pow(1 + r, tenure) / (Math.pow(1 + r, tenure) - 1);
            
            let balance = loanAmount;
            let totalInterest = 0;
            emiTableBody.innerHTML = '';
            for (let i = 1; i <= tenure; i++) {
                const interest = balance * r;
                const principal = emi - interest;
                balance -= principal;
                totalInterest += interest;
                const row = emiTableBody.insertRow();
                row.insertCell(0).textContent = i;
                row.insertCell(1).textContent = '₹ ' + Math.round(balance);
                row.insertCell(2).textContent = '₹ ' + Math.round(interest);
                row.insertCell(3).textContent = '₹ ' + Math.round(principal);
                row.insertCell(4).textContent = '₹ ' + Math.round(emi);
            }
            const totalPayable = loanAmount + totalInterest;
            totalInterestSpan.textContent = Math.round(totalInterest);
            totalPayableSpan.textContent = Math.round(totalPayable);
            drawPieChart(totalInterest, loanAmount);
            resultsDiv.style.display = 'block';
        }
        function drawPieChart(interest, principal) {
            const total = interest + principal;
            const interestAngle = (interest / total) * 2 * Math.PI;
            const principalAngle = (principal / total) * 2 * Math.PI;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            // Draw principal arc
            ctx.beginPath();
            ctx.moveTo(100, 100);
            ctx.arc(100, 100, 80, 0, principalAngle);
            ctx.fillStyle = '#ffa500';
            ctx.fill();
            // Draw interest arc
            ctx.beginPath();
            ctx.moveTo(100, 100);
            ctx.arc(100, 100, 80, principalAngle, 2 * Math.PI);
            ctx.fillStyle = '#ff6600';
            ctx.fill();
            // Draw inner circle for donut effect
            ctx.beginPath();
            ctx.arc(100, 100, 50, 0, 2 * Math.PI);
            ctx.fillStyle = 'white';
            ctx.fill();
        }