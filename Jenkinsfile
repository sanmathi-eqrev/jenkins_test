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
                echo 'Testing Counter Application...'
                bat 'node test.js'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying.....'
            }
        }
    }
}