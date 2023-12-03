pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh "Etapa BUILD en validacion"
            }
            
        }

        stage('Test') {
            steps {
                echo "Etapa Test en desarrollo. OK"
            }
        }

        stage('Deploy') {
                    steps {
                        sh "docker-compose up -d --build"
                    }
        }


    }
}
