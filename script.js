// ==========================================
// NEXTSTEP FINANCIAL PLATFORM
// SCRIPT.JS
// ==========================================


// ==========================================
// 1. CREATE ACCOUNT BUTTONS
// ==========================================

const createAccountButtons = document.querySelectorAll(
    ".signup-btn, .primary-btn"
);

createAccountButtons.forEach(function(button) {

    button.addEventListener("click", function(event) {

        event.preventDefault();

        alert(
            "Welcome to NextStep! Your financial journey starts here."
        );

    });

});


// ==========================================
// 2. LOGIN BUTTON
// ==========================================

const loginButton =
    document.querySelector(".login-btn");

if (loginButton) {

    loginButton.addEventListener("click", function(event) {

        event.preventDefault();

        alert("Login feature coming soon!");

    });

}


// ==========================================
// 3. FINANCIAL OVERVIEW
// ==========================================

// These are temporary values.
// Later, we will connect this overview
// directly to the user's budget.

let income = 45000;

let expenses = 28500;

let savings = income - expenses;


// ==========================================
// 4. DISPLAY FINANCIAL OVERVIEW
// ==========================================

const moneyItems =
    document.querySelectorAll(
        ".financial-card .money-item strong"
    );


if (moneyItems.length >= 3) {

    moneyItems[0].textContent =
        "KES " + income.toLocaleString();

    moneyItems[1].textContent =
        "KES " + expenses.toLocaleString();

    moneyItems[2].textContent =
        "KES " + savings.toLocaleString();

}


// ==========================================
// 5. INITIAL SAVINGS INFORMATION
// ==========================================

let savingsGoal = 50000;

let currentSavings = 30000;

let savingsPercentage =
    (currentSavings / savingsGoal) * 100;


// Make sure percentage does not exceed 100%

if (savingsPercentage > 100) {

    savingsPercentage = 100;

}


// ==========================================
// 6. INITIAL SAVINGS PROGRESS
// ==========================================

const savingsProgress =
    document.querySelector("#savings-progress");


if (savingsProgress) {

    savingsProgress.style.width =
        savingsPercentage + "%";

}


// ==========================================
// 7. BUDGET CALCULATOR
// ==========================================

const budgetForm =
    document.querySelector(".budget-form");


if (budgetForm) {

    budgetForm.addEventListener("submit", function(event) {

        // Prevent page refresh
        event.preventDefault();


        // ==================================
        // GET USER INPUT
        // ==================================

        const income =
            Number(
                document.querySelector("#income").value
            );


        const food =
            Number(
                document.querySelector("#food").value
            );


        const transport =
            Number(
                document.querySelector("#transport").value
            );


        const rent =
            Number(
                document.querySelector("#rent").value
            );


        const other =
            Number(
                document.querySelector("#other").value
            );


        // ==================================
        // CALCULATE TOTAL EXPENSES
        // ==================================

        const totalExpenses =
            food +
            transport +
            rent +
            other;


        // ==================================
        // CALCULATE REMAINING MONEY
        // ==================================

        const remaining =
            income - totalExpenses;


        // ==================================
        // DISPLAY INCOME
        // ==================================

        document.querySelector(
            "#result-income"
        ).textContent =
            "KES " +
            income.toLocaleString();


        // ==================================
        // DISPLAY EXPENSES
        // ==================================

        document.querySelector(
            "#result-expenses"
        ).textContent =
            "KES " +
            totalExpenses.toLocaleString();


        // ==================================
        // DISPLAY REMAINING MONEY
        // ==================================

        document.querySelector(
            "#result-remaining"
        ).textContent =
            "KES " +
            remaining.toLocaleString();


        // ==================================
        // BUDGET MESSAGE
        // ==================================

        const budgetMessage =
            document.querySelector("#budget-message");


        if (remaining > 0) {

            budgetMessage.textContent =
                "Great! You have KES " +
                remaining.toLocaleString() +
                " remaining. Consider putting some of it into savings.";

        }

        else if (remaining === 0) {

            budgetMessage.textContent =
                "Your income and expenses are equal. You currently have no money remaining.";

        }

        else {

            budgetMessage.textContent =
                "Your expenses are higher than your income by KES " +
                Math.abs(remaining).toLocaleString() +
                ". Consider reviewing your expenses.";

        }

    });

}


// ==========================================
// 8. SAVINGS GOAL CALCULATOR
// ==========================================

const savingsForm =
    document.querySelector(".savings-form");


if (savingsForm) {

    savingsForm.addEventListener("submit", function(event) {

        // Prevent page refresh
        event.preventDefault();


        // ==================================
        // GET SAVINGS GOAL
        // ==================================

        const savingsGoal =
            Number(
                document.querySelector(
                    "#savings-goal"
                ).value
            );


        // ==================================
        // GET CURRENT SAVINGS
        // ==================================

        const currentSavings =
            Number(
                document.querySelector(
                    "#current-savings"
                ).value
            );


        // ==================================
        // CHECK SAVINGS GOAL
        // ==================================

        if (savingsGoal <= 0) {

            alert(
                "Please enter a savings goal greater than zero."
            );

            return;

        }


        // ==================================
        // CALCULATE SAVINGS PERCENTAGE
        // ==================================

        let percentage =
            (currentSavings / savingsGoal) * 100;


        // Don't allow progress above 100%

        if (percentage > 100) {

            percentage = 100;

        }


        // ==================================
        // CALCULATE REMAINING
        // ==================================

        const remaining =
            savingsGoal - currentSavings;


        // ==================================
        // DISPLAY SAVINGS GOAL
        // ==================================

        document.querySelector(
            "#display-goal"
        ).textContent =
            "KES " +
            savingsGoal.toLocaleString();


        // ==================================
        // DISPLAY CURRENT SAVINGS
        // ==================================

        document.querySelector(
            "#display-savings"
        ).textContent =
            "KES " +
            currentSavings.toLocaleString();


        // ==================================
        // DISPLAY PERCENTAGE
        // ==================================

        document.querySelector(
            "#display-percentage"
        ).textContent =
            Math.round(percentage) +
            "% completed";


        // ==================================
        // UPDATE PROGRESS BAR
        // ==================================

        document.querySelector(
            "#savings-progress"
        ).style.width =
            percentage + "%";


        // ==================================
        // DISPLAY REMAINING MONEY
        // ==================================

        document.querySelector(
            "#display-remaining"
        ).textContent =
            "KES " +
            Math.max(remaining, 0).toLocaleString() +
            " remaining";


        // ==================================
        // CHECK IF GOAL IS COMPLETE
        // ==================================

        if (currentSavings >= savingsGoal) {

            document.querySelector(
                "#display-percentage"
            ).textContent =
                "🎉 Goal Completed!";

        }

    });

}


// ==========================================
// 9. JAVASCRIPT CONNECTION TEST
// ==========================================

console.log(
    "NextStep JavaScript is connected successfully!"
);