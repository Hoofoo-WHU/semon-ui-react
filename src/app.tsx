import * as React from 'react'
import * as ReactDom from 'react-dom'
import { Button, Icon, Input, Row, Col } from '@/'
import '@/style/app.scss'

interface IState { disabled: boolean, type?: 'primary' | 'dashed' | 'danger', value: string }

class App extends React.Component<any, IState> {
  readonly state: IState = {
    disabled: false,
    type: undefined,
    value: ''
  }
  disabled() {
    this.setState((state) => {
      return {
        disabled: !state.disabled
      }
    })
  }
  default() {
    this.setState({ type: undefined })
  }
  primary() {
    this.setState({ type: 'primary' })
  }
  danger() {
    this.setState({ type: 'danger' })
  }
  dashed() {
    this.setState({ type: 'dashed' })
  }
  render() {
    return <React.Fragment>
      <h1>Grid</h1>
      <Row className="demo-row">
        <Col className='demo-col' span='12'><div>col-12</div></Col>
        <Col className='demo-col' span='12'><div>col-12</div></Col>
      </Row>
      <Row className="demo-row">
        <Col className='demo-col' span='8'><div>col-8</div></Col>
        <Col className='demo-col' span='8'><div>col-8</div></Col>
        <Col className='demo-col' span='8'><div>col-8</div></Col>
      </Row>
      <Row className="demo-row">
        <Col className='demo-col' span='6'><div>col-6</div></Col>
        <Col className='demo-col' span='6'><div>col-6</div></Col>
        <Col className='demo-col' span='6'><div>col-6</div></Col>
        <Col className='demo-col' span='6'><div>col-6</div></Col>
      </Row>
      <section className='demo-input'>
        <h1>Input</h1>
        <h2>normal:</h2>
        <Input size='small' placeholder='small size' />
        <Input
          className='aa123123'
          placeholder='default size'
          value={this.state.value}
          onChange={(e) => { this.setState({ value: e.target.value }) }}
        />
        <Input
          size='large' placeholder='large size'
          value={this.state.value}
          onChange={(e) => { this.setState({ value: e.target.value }) }}
        />
        <h2>prefix:</h2>
        <Input
          className='aa123123'
          placeholder='enter your username'
          prefix={<Icon type='user' style={{ color: 'grey' }} />}
        />
      </section>
      <h1>Button</h1>
      <h2>options:</h2>
      <Button.Group>
        <Button onClick={this.disabled.bind(this)}>Disabled</Button>
        <Button onClick={this.default.bind(this)}>Default</Button>
        <Button onClick={this.primary.bind(this)}>Primary</Button>
        <Button onClick={this.danger.bind(this)}>Danger</Button>
        <Button onClick={this.dashed.bind(this)}>Dashed</Button>
      </Button.Group>
      <h2>single:</h2>
      <Button size='small' disabled={this.state.disabled} type={this.state.type}>
        Small
      </Button>
      <Button disabled={this.state.disabled} type={this.state.type}>
        Default
      </Button>
      <Button size='large' disabled={this.state.disabled} type={this.state.type}>
        Large
      </Button>
      <h2>round:</h2>
      <Button icon="search" type={this.state.type} disabled={this.state.disabled}>Search</Button>
      <Button icon="search" shape='round' type={this.state.type} disabled={this.state.disabled}>Search</Button>
      <Button icon="search" shape='circle' type={this.state.type} disabled={this.state.disabled}></Button>
      <h2>group:</h2>
      <Button.Group size='small'>
        <Button type={this.state.type} disabled={this.state.disabled}>Left</Button>
        <Button type={this.state.type} disabled={this.state.disabled}>Middle</Button>
        <Button type={this.state.type} disabled={this.state.disabled}>Right</Button>
      </Button.Group>
      <Button.Group>
        <Button type={this.state.type} disabled={this.state.disabled}>Left</Button>
        <Button type={this.state.type} disabled={this.state.disabled}>Middle</Button>
        <Button type={this.state.type} disabled={this.state.disabled}>Right</Button>
      </Button.Group>
      <Button.Group size='large'>
        <Button type={this.state.type} disabled={this.state.disabled}>Left</Button>
        <Button type={this.state.type} disabled={this.state.disabled}>Middle</Button>
        <Button type={this.state.type} disabled={this.state.disabled}>Right</Button>
      </Button.Group>
      <Button.Group>
        <Button type={this.state.type} disabled={this.state.disabled} icon='left'></Button>
        <Button type={this.state.type} disabled={this.state.disabled} icon='search'></Button>
        <Button type={this.state.type} disabled={this.state.disabled} icon='right'></Button>
      </Button.Group>
      <h1>Icon</h1>
      <Icon type='left'></Icon>
      <Icon type='search'></Icon>
      <Icon type='right'></Icon>
    </React.Fragment>
  }
}
ReactDom.render(<App />, document.getElementById('app'))