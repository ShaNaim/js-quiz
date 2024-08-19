import React from "react";

export default function TopicDetails({ params }: TopicDetailsProps) {
  return (
    <div>
      TopicId {params.topicId}
      <div>base/topics/topicId</div>
    </div>
  );
}

interface TopicDetailsProps {
  params: { topicId: string };
}
