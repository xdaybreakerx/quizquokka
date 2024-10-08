import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { AnswerAlert } from "@/components/ExplainAnswer/ExplainAnswer";

import { useExplainAnswer } from "@/hooks/useGetExplanation";


export default function FlashCard({
  question,
  answer,
  activeTab,
  setActiveTab,
}) {
  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-[400px] min-h-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="question">Question</TabsTrigger>
        <TabsTrigger value="answer">Answer</TabsTrigger>
      </TabsList>

      <TabsContent value="question">
        <Card>
          <CardHeader>
            <CardTitle>Question</CardTitle>
          </CardHeader>
          <CardContent className="space-y-1">
            <div className="space-y-1">
              <p className="question-body">{question}</p>
            </div>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </TabsContent>

      <TabsContent value="answer">
        <Card>
          <CardHeader>
            <CardTitle>Answer</CardTitle>
          </CardHeader>
          <CardContent className="space-y-1">
            <div className="space-y-1">
              <p className="question-body">{answer}</p>
            </div>
          </CardContent>
          <CardFooter>
            <AnswerAlert question={question} answer={answer}/>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
