import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { AnswerAlert } from "@/components/ExplainAnswer/ExplainAnswer";

/**
 * A React component for displaying a flashcard with a question and answer. The component expects props: question (string) - the question to display, answer (string) - the answer to display, activeTab (string) - the currently active tab, setActiveTab (function) - a function to set the active tab. The component renders a tabbed interface with two tabs: question and answer. When the user switches between tabs, the corresponding content (question or answer) is displayed along with the question or answer text. It also includes a Card component for styling each tab's content.
 * @author Xander
 *
 * @export
 * @param {{ question: any; answer: any; activeTab: any; setActiveTab: any; }} param0 Object containing props for the FlashCard component
 * @param {*} param0.question The question to be displayed on the flashcard
 * @param {*} param0.answer The answer to the question on the flashcard
 * @param {*} param0.activeTab The active tab value for displaying either question or answer
 * @param {*} param0.setActiveTab Callback function to set the active tab value
 * @returns {*} A function that renders a flashcard with question and answer tabs based on the provided props: question, answer, activeTab, setActiveTab.
 */
export default function FlashCard({
  question,
  answer,
  activeTab,
  setActiveTab,
}) {
  return (
    <Tabs
      value={activeTab}
      onValueChange={setActiveTab}
      className="w-[400px] min-h-[400px]"
    >
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
            <AnswerAlert question={question} answer={answer} />
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
