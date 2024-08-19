import React from "react";

export default function QuizDetails({ params }: QuizDetailsProps) {
  return (
    <div>
      Topic :{params.topicId}/ Quiz :{params.quizId} Details
      <div>base/topics/topicId/quizId</div>
    </div>
  );
}

interface QuizDetailsProps {
  params: { topicId: string; quizId: string };
}
