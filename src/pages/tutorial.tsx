import { Layout } from '../components/Layout'

export default function Tutorial() {
  return <div>Tutorial</div>
}

Tutorial.getLayout = (page: any) => <Layout>{page}</Layout>
