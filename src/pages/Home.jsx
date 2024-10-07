import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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

export default function HomePage() {
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
        </section>
      </div>
    </Layout>
  );
}
