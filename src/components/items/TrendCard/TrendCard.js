import './TrendCard.css'

import { TrendData } from '../../../data/trendData'

function TrendCard() {
  return (
    <div className='Trend-card'>
        <h3>Trends for you</h3>

        {TrendData.map(({name, shares}, id) => {
            return (
                <div className='trend' key={id}>
                    <span>#{name}</span>
                    <span>{shares}k shares</span>
                </div>
            )
        })}
    </div>
  )
}

export default TrendCard
