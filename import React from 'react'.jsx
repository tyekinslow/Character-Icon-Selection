import React from 'react'
import cx from 'classnames'
import sorceressImg from './resources/sorceress.jpg'
import knightImg from './resources/knight.jpg'
import styles from './styles.module.css'
import { Header, Subheader, Content } from './components'

const useLevelUpScreen = () => {
  const [selected, setSelected] = React.useState([])

  const onSelect = (type) => (e) => {
    setSelected((prevSelected) => {
      if (prevSelected.includes(type)) {
        return prevSelected.filter((t) => t !== type)
      }
      return [...prevSelected, type]
    })
  }

  return {
    selected,
    onSelect,
  }
}

const App = () => {
    const { selected, onSelect, morphed, onMorph } = useLevelUpScreen()
  
    return (
      <div className={styles.root}>
        <Header>
          Select Your Icon 
        </Header>
        <Subheader>Please submit after selection.</Subheader>
        <div style={{ margin: '25px auto' }}>
          <Content>
            <div
              onClick={onSelect('Sorceress')}
              className={cx(styles.characterBox, {
                [styles.selectedBox]: selected.includes('Sorceress'),
              })}
            >
              <h2>Sorceress</h2>
              <img
                alt=""
                src={sorceressImg}
                className={cx(styles.tier2, {
                  [styles.selected]: selected.includes('Sorceress'),
                })}
              />
            </div>
            <div
              onClick={onSelect('Knight')}
              className={cx(styles.characterBox, {
                [styles.selectedBox]: selected.includes('Knight'),
              })}
            >
              <h2>Knight</h2>
              <img
                alt=""
                src={knightImg}
                className={cx(styles.tier2, {
                  [styles.selected]: selected.includes('Knight'),
                })}
              />
            </div>
          </Content>
        </div>
        <div className={styles.morph}>
          <button
            name="morph"
            type="button"
            className={styles.morph}
            onClick={onMorph}
          >
            Morph
          </button>
        </div>
      </div>
    )
  }

export default App