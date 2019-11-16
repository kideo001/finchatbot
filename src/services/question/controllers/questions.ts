
export default {
    questionAsked(question : string) {
        if (question.toLowerCase().indexOf("balance") > -1) {
            return "Your account balance is R" + Math.round(Math.random()*1000)+".00";
        } else if (question.toLowerCase().indexOf("loan")> -1) {
            var random = Math.random();
            if (random >= 0.5) {
                return "You have pre approval to get a loan";
            } else {
                return "Sorry, you do not qualify for a loan";
            }
        } else if (question.toLowerCase().indexOf("hi") > -1 || 
            question.toLowerCase().indexOf("hello") > -1 ||
            question.toLowerCase().indexOf("ola") > -1 ||
            question.toLowerCase().indexOf("dumelang") > -1 ||
            question.toLowerCase().indexOf("goeie dag") > -1) {
                var random = Math.round(Math.random()*5);
                switch (random) {
                    case 1:
                        return "Hello there!";
                    case 2:
                        return "Nice to see you again";
                    case 3:
                        return "Le ki";
                    case 4:
                        return "How are you, can I help?";
                    case 5:
                        return "Aangenaam, hoe kan ek help?"
                }
        } else {
            return "Sorry, I do not understand what you are asking";
        }
    }
}