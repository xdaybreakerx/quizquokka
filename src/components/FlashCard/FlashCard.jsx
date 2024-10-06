export default function FlashCard() {    
  return (
    <div id="flash-card">
      <div id="flash-card-question">
        <h1>Question</h1>
        <p id="quesiton-body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi maiores
          sunt optio, voluptate iste saepe. Praesentium quasi distinctio illum
          laboriosam? Pariatur perspiciatis at voluptatibus commodi accusantium
          eaque quod minus explicabo?
        </p>
        <button>Show Answer</button>
      </div>
      <div id="flash-card-answer">
        <h1>Answer</h1>
        <p id="answer-body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
          iste voluptate deleniti quod neque omnis accusamus nostrum iure dicta
          ex ratione voluptatem aperiam modi itaque dolorem, vel fugit aliquam
          placeat.
        </p>
        <div>
          <button>Explain Answer?</button>
          <button>Show Question</button>
        </div>
      </div>
    </div>
  );
}
