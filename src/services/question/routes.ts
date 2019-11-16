import { Request, Response } from "express";
import { checkQuestionParams } from "../../intercept/checks";
import questions from "./controllers/questions"

export default [
  {
    path: "/v1/finchatbot/question",
    method: "get",
      handler: [checkQuestionParams,
        async ({ query }: Request, res: Response) => {
          res.status(200).send(questions.questionAsked(query.question));
        }
      ]
  },
  {
    path: "/",
    method: "get",
      handler: [
        async ( query : Request, res: Response) => {
          res.render("index", {});
        }
      ]
  }
];