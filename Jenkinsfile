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
                when{
                    expression{
                        BRANCH_NAME=="multi_pipeline"
                    }
                }
                steps{
                    script{
                        gv.build()
                    }
                }
            }
            stage("deploy"){
                 when{
                    expression{
                        BRANCH_NAME=="multi_pipeline"
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
            failure{
                echo "it failed"
            }
        }
}