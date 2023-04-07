import Questions from "@/components/Question";
export const getStaticProps = async () => {
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();
  return {
    props: {questions: data.products}
  }
}

export default function clients({questions}) {
  return (
    <div>
      <div className='mt-6 mb-10 max-w-fit mx-auto flex justify-center'><h1> Clients FAQ</h1></div>
      <Questions props={questions.filter(question => question.category == 'laptops')}/>
      </div>
  )
}

