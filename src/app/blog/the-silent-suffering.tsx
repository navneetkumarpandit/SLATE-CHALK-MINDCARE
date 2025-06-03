import React from 'react';

export default function TheSilentSufferingPost() {
  return (
    <div className="container mx-auto py-12 md:py-20 text-purple-900"> {/* Added text-purple-900 for text color */}
      <h1 className="text-4xl font-bold mb-8 text-primary">
        Blog 1: The Silent Suffering – How Children Communicate Emotional Pain Without Words
      </h1>

      {/* Dummy Image */}
      <img
        src="/images/placeholder-blog-image.png" // **Replace with the actual path to your dummy image**
        alt="Placeholder blog image"
        className="w-full mb-6 rounded-lg" // Added basic styling
      />

      <div className="prose max-w-none"> {/* Using prose for basic typography */}
        <p>
          <strong>Introduction</strong><br />
          Children often experience emotional pain that goes unnoticed because they can’t always express it verbally. At Slate n Chalk, we understand that tantrums, withdrawal, or unusual behaviours are often silent cries for help.
        </p>

        <h2>Why Words Fail Children</h2>
        <p>
          Young children frequently lack the language skills to describe feelings like anxiety, sadness, or fear. Instead, they may act out or shut down, showing emotional pain in less obvious ways.
        </p>

        <h2>Signs to Watch For</h2>
        <ul>
          <li>Withdrawal from family and friends</li>
          <li>Sudden aggression or irritability</li>
          <li>Changes in appetite or sleeping patterns</li>
          <li>Physical complaints like headaches or stomach-aches</li>
        </ul>

        <h2>How Environment Impacts Emotional Health</h2>
        <p>
          Stress at school, family conflicts, or changes in routine can overwhelm a child emotionally, making it harder for them to communicate distress.
        </p>

        <h2>Supporting Emotional Expression</h2>
        <ul>
          <li>Create safe and open spaces for conversations</li>
          <li>Use play and art as emotional outlets</li>
          <li>Validate their feelings without judgment</li>
        </ul>

        <p>
          At Slate n Chalk, we use therapeutic play and art-based activities to help children express their feelings safely.
        </p>
      </div>
    </div>
  );
}
