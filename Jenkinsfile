pipeline {
    agent any
        stages{
            stage("init"){
                steps{
                    script{
                        gv = load "script.groovy"
                    }
                }
            }
            stage("test"){
                steps{
                    script{
                        gv.test()
                    }
                }
            }
            stage("build"){
                steps{
                    script{
                        gv.build()
                    }
                }
            }
            stage("deploy"){
                when{
                    expression{
                        BRANCH_NAME=="main"
                    }
                }
                steps{
                    script{
                        gv.deploy()
                    }
                }
            }
        }
        post{
            success{
                echo "it's live"
            }
        }
}