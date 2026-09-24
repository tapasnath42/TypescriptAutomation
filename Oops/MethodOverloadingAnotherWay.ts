async loginToApplication(username: string | number, password: string | number, login?: string): Promise<void> {
        const enteredUsername = String(username);
        const enteredPassword = String(password);

        await this.username.fill(enteredUsername);
        await this.password.fill(enteredPassword);

        if (login) {
            console.log(`Login action: ${login}`);
        }

        await this.loginButton.click();
    }
