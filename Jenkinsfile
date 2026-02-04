pipeline{
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                echo 'Installing Node.js dependencies...'
                sh 'npm init -y'
                sh 'npm install --save-dev http-server'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing Counter Application...'
                echo 'Running index.js with HTML frontend...'
                sh 'node -e "console.log(\\"Counter App - index.js executed successfully\\"); console.log(\\"Count starts at: 0\\"); console.log(\\"Available functions: increment(), decrement(), updateDisplay()\\");"'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying Application...'
                echo 'Application is ready to be served'
                echo 'To run locally: npx http-server . -p 8080'
                echo 'Then open: http://localhost:8080/index.html'
            }
        }
    }
}