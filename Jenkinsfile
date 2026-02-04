pipeline{
    agent any

    tools {
        nodejs 'node25'
    }


    stages {
        stage('Build') {
            steps {
                echo 'Building...'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
                bat 'npm install'
                bat 'node index.js'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying.....'
            }
        }
    }
}