import Questions from '@/components/Question';
import Head from 'next/head'

export const getStaticProps = async () => {
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();
  return {
    props: {questions: data.products}
  }
}


export default function Home({questions}) {
  return (
    <div>
      <Head>
        <title>Prime Carer FAQ</title>
        <meta name='keyword' content='Frequently asked questions'></meta>
      </Head>
      <div className='mt-6 mb-10 max-w-fit mx-auto flex justify-center'><h1> All Prime Carers Frequently Asked Questions</h1></div>
      <Questions props={questions}/>
    </div>
  )
}
