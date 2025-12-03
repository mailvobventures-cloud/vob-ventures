interface ServiceOverviewProps {
  service: any
}

export default function ServiceOverview({ service }: ServiceOverviewProps) {
  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Overview</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {service.longDescription}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
