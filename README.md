# EMI Calculator

This is a simple and customizable **EMI (Equated Monthly Installment) Calculator** built for websites. It allows users to calculate their monthly EMIs based on the loan amount, interest rate, and loan tenure. It also provides a detailed breakdown of each monthly installment and a visual representation of the total interest and principal through a pie chart.

## Features:

- **Customizable**: The calculator can be easily modified to fit your website’s design and requirements.
- **Interactive Interest Rate Selection**: Users can choose between multiple interest rates, and the EMI is calculated dynamically based on the selected rate.
- **Detailed Installment Breakdown**: For each month, the calculator shows the principal, interest, and remaining loan balance.
- **Visual Representation**: A pie chart helps users visualize the proportion of total interest and principal in their loan.

## How to Use:

1. **HTML Structure**:
   - The main structure consists of input fields for loan amount, interest rate buttons, and tenure (in months).
   - Results are displayed in a table with a pie chart for visualization.

2. **Loan Amount & Tenure**:
   - Users can input their loan amount and the tenure (in months) to calculate the EMI.

3. **Interest Rate Selection**:
   - Users select an interest rate by clicking on one of the predefined interest buttons (24.75%, 27.5%, or 29.25%).
   - The selected rate is highlighted and used in the EMI calculation.

4. **Calculation Logic**:
   - The EMI is calculated using the standard formula:
     \[
     EMI = \frac{P \times r \times (1 + r)^n}{(1 + r)^n - 1}
     \]
     - `P`: Loan Amount
     - `r`: Monthly interest rate (Annual interest rate / 12 / 100)
     - `n`: Loan tenure in months
   - The calculator breaks down each installment, showing how much of each EMI goes toward paying the principal and how much is interest.

5. **EMI Breakdown**:
   - The result is displayed in a table, showing the installment number, outstanding balance, interest, principal, and total EMI for each month.
   - The remaining balance reduces over time as the principal is paid off.

6. **Pie Chart**:
   - The pie chart visually displays the total interest vs. the total principal. 
   - The chart uses different colors to differentiate between the interest and principal portions of the total loan payable amount.

## Customization:

- **Interest Rates**: You can modify the available interest rates in the HTML by changing the data-rate attributes of the buttons.
- **Loan Amount and Tenure**: The minimum and maximum values for the loan amount and tenure can be adjusted in the HTML input fields.
- **Styling**: The look and feel of the calculator can be customized via the `assets/style.css` file.
- **Chart Customization**: The pie chart is generated using the HTML `<canvas>` element and can be customized further in the `drawPieChart()` function in `assets/script.js`.

## Files Included:

- `index.html`: The main file containing the structure of the EMI Calculator.
- `assets/style.css`: The stylesheet for customizing the calculator’s appearance.
- `assets/script.js`: The JavaScript file handling the calculation logic, table generation, and chart rendering.

## Integration Instructions:

1. Download the files and add them to your website’s directory.
2. Link the CSS and JavaScript files in your webpage.
3. Modify the HTML as necessary to fit your specific use case (e.g., loan limits, interest rates).
4. Test the calculator to ensure it works properly on your website.

## License:

Feel free to use, modify, and integrate this EMI Calculator into your project as needed. 

### Note:
Please use this EMI Calculator on your website if you find it helpful. If you have any questions, suggestions, or need further assistance with the project, please don't hesitate to email me at muhammed@97gmail.com. I'm always happy to help or receive feedback on my work.
