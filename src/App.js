import React from "react";
import { Feed, Grid, Label, Search, Table, TableHeader, TableHeaderCell, TableRow, TableCell, TableBody, TableFooter, Menu, Icon, Container, List } from "semantic-ui-react";

function App() {
  return (
    <>
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Table celled>
                <TableHeader>
                  <TableRow >
                    <TableHeaderCell colSpan={2} textAlign="right">
                      <Search placeholder="Search Documents.." />
                    </TableHeaderCell>
                  </TableRow>
                </TableHeader>

                <TableHeader>
                  <TableRow textAlign="center">
                    <TableHeaderCell>Nama Document</TableHeaderCell>
                    <TableHeaderCell>Jenis File</TableHeaderCell>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  <TableRow>
                    <TableCell>
                      <Label ribbon>Panduan Belajar Javascript</Label>
                    </TableCell>
                    <TableCell textAlign="center">PDF</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Panduan Belajar CSS</TableCell>
                    <TableCell textAlign="center">PDF</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell> Panduan Belajar React JS</TableCell>
                    <TableCell textAlign="center">PDF</TableCell>
                  </TableRow>
                </TableBody>

                <TableFooter>
                  <TableRow>
                    <TableHeaderCell colSpan="2">
                      <Menu floated="right">
                        <Menu.Item as="a"><Icon name="angle left" /></Menu.Item>
                        <Menu.Item as="a">1</Menu.Item>
                        <Menu.Item as="a">2</Menu.Item>
                        <Menu.Item as="a">3</Menu.Item>
                        <Menu.Item as="a">4</Menu.Item>
                        <Menu.Item as="a"><Icon name="angle right" /></Menu.Item>
                      </Menu>
                    </TableHeaderCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <Feed>
                <Feed.Event>
                  <Feed.Label>
                    <img alt="avatar" src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
                  </Feed.Label>
                  <Feed.Content>
                    <Feed.Summary>
                      <Feed.User>Anton</Feed.User> added you as a friend
                      <Feed.Date>3 Hour Ago</Feed.Date>
                    </Feed.Summary>
                    <Feed.Meta>
                      <Feed.Like>
                        <Icon name="like" /> 4 Likes
                      </Feed.Like>
                    </Feed.Meta>
                  </Feed.Content>
                </Feed.Event>

                <Feed.Event>
                  <Feed.Label>
                    <Icon name="pencil" />
                  </Feed.Label>
                  <Feed.Content>
                    <Feed.Summary>You submitted a new post to the page</Feed.Summary>
                    <Feed.Meta><Feed.Date>3 days ago</Feed.Date></Feed.Meta>
                    <Feed.Extra>Saya Senang Belajar Bahasa Pemrograman</Feed.Extra>
                    <Feed.Meta><Feed.Like><Icon name="like" />11 Likes</Feed.Like></Feed.Meta>
                  </Feed.Content>
                </Feed.Event>

                <Feed.Event>
                  <Feed.Label>
                    <img src="https://react.semantic-ui.com/images/avatar/small/helen.jpg" alt="Avatar" />
                  </Feed.Label>
                  <Feed.Content>
                    <Feed.Date>4 Days ago</Feed.Date>
                    <Feed.Summary>
                      David added 2 new Image
                    </Feed.Summary>
                    <Feed.Extra images>
                      <a href="/">
                        <img src=" https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png" alt="niomic" />
                      </a>
                      <a href="/">
                        <img src="https://cdn-images-1.medium.com/max/1600/1*6kK9j74vyOmXYm1gN6ARhQ.png" alt="react" />
                      </a>
                    </Feed.Extra>
                    <Feed.Meta>
                      <Feed.Like><Icon name="like" /> 2 Likes</Feed.Like>
                    </Feed.Meta>
                  </Feed.Content>
                </Feed.Event>
              </Feed>
            </Grid.Column>

            <Grid.Column width={6}>
              <List floated="right">
                <List.Item as="h3">Website Terkait</List.Item>
                <List.Item
                  icon="linkify"
                  content={<a href="https://google.com" target="_blank" rel="noreferrer">Google</a>}
                />
                <List.Item
                  icon="linkify"
                  content={<a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>}
                />
                <List.Item
                  icon="linkify"
                  content={<a href="https://semantic-ui.com" target="_blank" rel="noreferrer">Semantic UI</a>}
                />
                <List.Item
                  icon="linkify"
                  content={<a href="https://niomic.id" target="_blank" rel="noreferrer">Niomic</a>}
                />
                <List.Item
                  icon="linkify"
                  content={<a href="https://reactjs.org" target="_blank" rel="noreferrer">React</a>}
                />
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </>
  );
}

export default App; 
