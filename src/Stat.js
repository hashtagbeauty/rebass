import PropTypes from 'prop-types'

import React from 'react'
import Base from './Base'
import config from './config'

/**
 * Styled number display for statistics
 */

const Stat = ({
  value,
  label,
  unit,
  topLabel,
  ...props
}, { rebass }) => {
  const { fontSizes, bold, scale } = { ...config, ...rebass }

  const sx = {
    root: {
      display: 'inline-block'
    },
    value: {
      fontSize: fontSizes[0],
      letterSpace: '-.125em',
      fontWeight: bold,
      lineHeight: 1,
      marginTop: topLabel ? scale[1] / 2 : null,
      marginBottom: topLabel ? null : scale[1] / 2
    },
    unit: {
      fontSize: fontSizes[3]
    },
    label: {
      fontSize: fontSizes[6],
      fontWeight: bold,
      lineHeight: 1
    }
  }

  return (
    <Base
      {...props}
      className='Stat'
      baseStyle={sx.root}>
      {topLabel && <div style={sx.label}>{label}</div>}
      <div style={sx.value}>
        {value}
        {unit && <span style={sx.unit}>{unit}</span>}
      </div>
      {!topLabel && <div style={sx.label}>{label}</div>}
    </Base>
  )
}

Stat.propTypes = {
  /** Value for stat shown in large font size */
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  /** Optional unit for displaying next to value */
  unit: PropTypes.string,
  /** Label for stat */
  label: PropTypes.string,
  /** Displays label above value */
  topLabel: PropTypes.bool
}

Stat.contextTypes = {
  rebass: PropTypes.object
}

export default Stat

