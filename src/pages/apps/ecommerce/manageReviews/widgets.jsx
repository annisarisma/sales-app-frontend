import React from 'react'

const Widgets = ({ reviewData = [] }) => {
  const totalReviews = reviewData.length
  const averageReview =
    reviewData && reviewData.length > 0
      ? reviewData.reduce((acc, review) => acc + Number(review.star), 0) /
        totalReviews
      : 0

  const getReviewPercentage = () => {
    const totalPossibleReviews = reviewData.length
    const totalReviews =
      reviewData && reviewData.length > 0 ? reviewData.length : 0
    const totalPercentage = totalPossibleReviews
      ? (totalReviews / totalPossibleReviews) * 100
      : 0
    return totalPercentage.toFixed(0)
  }

  const percentage = getReviewPercentage()

  const getStarClass = (averageReview, index) => {
    if (index <= averageReview) {
      return 'ri-star-fill'
    } else if (index - 1 < averageReview && averageReview % 1 !== 0) {
      return 'ri-star-half-fill'
    }
    return 'ri-star-line'
  }

  return (
    <React.Fragment>
      <div className="grid items-center grid-cols-1 mb-4 divide-y divide-gray-200 dark:divide-dark-800 xl:grid-cols-3 xl:divide-y-0 xl:divide-x rtl:xl:divide-x-reverse">
        <div className="p-5 xl:ltr:first:pl-0 xl:rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 last:border-0">
          <h6 className="mb-5">Total Reviews</h6>
          <h3>
            <span>{totalReviews}</span>{' '}
            <span className="inline-block text-xs align-middle badge badge-green">
              <span>{percentage}</span>%
            </span>
          </h3>
          <p className="mt-2 text-gray-500 dark:text-dark-500">
            Growth in reviews on this year
          </p>
        </div>
        <div className="p-5 ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 last:border-0">
          <h6 className="mb-5">Average Rating</h6>
          <div className="flex items-center gap-3">
            <h3>
              <span>{averageReview.toFixed(1)}</span>
            </h3>
            <div className="text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <i key={i} className={getStarClass(averageReview, i + 1)}></i>
              ))}
            </div>
          </div>
          <p className="mt-2 text-gray-500">Average rating on this year</p>
        </div>
        <div className="p-5 space-y-1 ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 last:border-0">
          <div className="flex items-center gap-2">
            <p className="shrink-0">
              <i className="text-yellow-500 ri-star-fill"></i> 5
            </p>
            <div className="w-[80%] progress-bar progress-1">
              <div className="w-full text-white bg-green-500 progress-bar-wrap"></div>
            </div>
            <h6>4751</h6>
          </div>
          <div className="flex items-center gap-2">
            <p className="shrink-0">
              <i className="text-yellow-500 ri-star-fill"></i> 4
            </p>
            <div className="w-[64%] progress-bar progress-1">
              <div className="w-full text-white bg-pink-500 progress-bar-wrap"></div>
            </div>
            <h6>3658</h6>
          </div>
          <div className="flex items-center gap-2">
            <p className="shrink-0">
              <i className="text-yellow-500 ri-star-fill"></i> 3
            </p>
            <div className="w-[51%] progress-bar progress-1">
              <div className="w-full text-white bg-yellow-500 progress-bar-wrap"></div>
            </div>
            <h6>2349</h6>
          </div>
          <div className="flex items-center gap-2">
            <p className="shrink-0">
              <i className="text-yellow-500 ri-star-fill"></i> 2
            </p>
            <div className="w-[38%] progress-bar progress-1">
              <div className="w-full text-white bg-sky-500 progress-bar-wrap"></div>
            </div>
            <h6>1472</h6>
          </div>
          <div className="flex items-center gap-2">
            <p className="shrink-0">
              <i className="text-yellow-500 ri-star-fill"></i> 1
            </p>
            <div className="w-[15%] progress-bar progress-1">
              <div className="w-full text-white bg-red-500 progress-bar-wrap"></div>
            </div>
            <h6>120</h6>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Widgets
