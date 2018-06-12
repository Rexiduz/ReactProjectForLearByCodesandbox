import React from "react";
import { render } from "react-dom";
import "antd/dist/antd.css";
import { Button, Card, Col, Icon, Input, Layout, Row } from "antd";
import { connect } from "react-redux";
import {
  addTaskAction,
  delTaskAction,
  moveUpTaskAction,
  moveDownTaskAction
} from "./store/task/Action";

import withRed from "./withRed";

class TodoList extends React.PureComponent {
  render() {
    const {
      styles,
      tasksToShow,
      addTask,
      delateTask,
      upTask,
      downTask
    } = this.props;

    return (
      <Layout>
        <Layout.Content>
          <Row>
            <Col span={24}>
              <Card style={styles}>
                <Input
                  onPressEnter={event => {
                    addTask(event.target.value);
                    event.target.value = "";
                  }}
                />
              </Card>
            </Col>
            {tasksToShow.map(({ id, name }, index) => (
              <Col key={id} offset={1} span={22}>
                <Card>{name}</Card>
                <div style={{ float: "right" }}>
                  <Button
                    data-id={id}
                    onClick={event => delateTask(event.target.dataset.id)}
                  >
                    <Icon type="delete" />
                  </Button>
                  <Button
                    disabled={index === 0}
                    data-id={id}
                    onClick={event => upTask(event.target.dataset.id)}
                  >
                    <Icon type="up" />
                  </Button>
                  <Button
                    disabled={index === tasksToShow.length - 1}
                    data-id={id}
                    onClick={event => downTask(event.target.dataset.id)}
                  >
                    <Icon type="down" />
                  </Button>
                </div>
              </Col>
            ))}
          </Row>
        </Layout.Content>
      </Layout>
    );
  }
}

const mapStatToProps = state => ({
  tasksToShow: state.tasks
});

const mapDispathToProps = dispath => ({
  addTask: name => dispath(addTaskAction(name)),
  delateTask: id => dispath(delTaskAction(id)),
  upTask: id => dispath(moveUpTaskAction(id)),
  downTask: id => dispath(moveDownTaskAction(id))
});

export default withRed(connect(mapStatToProps, mapDispathToProps)(TodoList));
