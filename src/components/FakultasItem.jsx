import FakultasCard from './fakultas/FakultasCard'

const FakultasItem = ({ image, title, slug, index }) => {
  return (
    <div>
      <FakultasCard image={image} title={title} slug={slug} />
    </div>
  )
}

export default FakultasItem