import { Link } from "react-router-dom";
import Layout from "@/components/Layout/Layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContextProvider";


/**
 * Creates a Category Card component with the given title, description, and link. The card includes a title, description, and a button to start learning with a provided link.
 * @author Xander
 *
 * @param {{ title: any; description: any; link: any; }} param0 Object containing category card information
 * @param {*} param0.title Title of the category card
 * @param {*} param0.description Description of the category card
 * @param {*} param0.link Link for the category card
 * @returns {*} A function that returns JSX for a category card component with a title, description, and a link to start learning
 */
function CategoryCard({ title, description, link }) {
  return (
    <Card className="w-full h-full flex flex-col justify-between">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-end">
        <Button asChild variant="default">
          <Link to={link}>Start Learning</Link>
        </Button>
      </CardContent>
    </Card>
  );
}


/**
 * A function that represents the home page component of the QuizQuokka application. It renders a layout with the QuizQuokka header, description, and flashcard categories. It also includes conditional rendering for custom flash cards based on the user's authentication status.
 * @author Xander
 *
 * @export
 * @returns {*} A function representing the home page of the QuizQuokka application, displaying various flashcard categories based on user authentication status.
 */
export default function HomePage() {
  const { user } = useAuth();

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* App Name and Description */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-purple-700">QuizQuokka</h1>
          <p className="mt-4 text-lg text-gray-600">
            Master your knowledge with engaging flashcards on Data Structures &
            Algorithms, Python, JavaScript, React, and more!
          </p>
        </header>

        {/* Flashcard Categories */}
        <section
          id="flash-card-categories"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <CategoryCard
            title="Data Structures & Algorithms"
            description="Sharpen your problem-solving skills!"
            link="/dsa"
          />
          <CategoryCard
            title="Python"
            description="Learn Python programming with key concepts."
            link="/py"
          />
          <CategoryCard
            title="JavaScript"
            description="Master the language of the web."
            link="/js"
          />
          <CategoryCard
            title="React"
            description="Dive deep into the most popular front-end library."
            link="/react"
          />

          {/* Conditional rendering for custom flash cards */}
          {user && (
            <>
              <CategoryCard
                title="Add Custom Flash Cards"
                description="Make studying easier by adding your own flash cards!"
                link="/add-card"
              />
              <CategoryCard
                title="View Custom Flash Cards"
                description="Your very own custom flash cards!"
                link="/view-custom-cards"
              />
            </>
          )}
        </section>
      </div>
    </Layout>
  );
}
