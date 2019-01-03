import { h } from 'hyperapp'
import s from './BestTime.module.css'
import Dialog from './Dialog'
import Button from './Button'

const BestTime = ({ key, state, actions }) => (
  <Dialog
    key={key}
    title="Fastest Mine Sweepers"
    onClose={actions.toggleBestTime}
    onKeyDown={(event) => event.keyCode === 27 && actions.toggleBestTime()}
  >
    <div class={s.root}>
      <table class={s.table}>
        <tbody>
          {state.levels.map((row) => (
            <tr>
              <td class={s.cell}>{row.level}:</td>
              <td class={s.cell}>{row.time} seconds</td>
              <td class={s.cell}>{row.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div class={s.footer}>
        <Button type="button" onClick={actions.resetBestTime}>
          <span class={s.button}>Reset Scores</span>
        </Button>
        <Button type="button" onClick={actions.toggleBestTime} onCreate={(el) => el.focus()}>
          <span class={s.button}>OK</span>
        </Button>
      </div>
    </div>
  </Dialog>
)

export default BestTime
