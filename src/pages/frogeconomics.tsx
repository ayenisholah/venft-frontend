import { Layout } from '../components/Layout'

export default function Frogeconomics() {
  return <div className="mt-1">Frogeconomics</div>
}

Frogeconomics.getLayout = (page: any) => <Layout>{page}</Layout>
