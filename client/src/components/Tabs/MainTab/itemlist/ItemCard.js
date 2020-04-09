import React, {Component} from 'react';
import { makeStyles, responsiveFontSizes } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavorIcon from"./FavorIcon";
import axios from 'axios';
import { Link } from "react-router-dom";
const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
    padding:10
  },
  media: {
    width: '100%',
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));
function _getList() {
  const apiUrl = 'dummy/ItemList.json';
  axios.get(apiUrl)
      .then(data => { //가지고 온 리스트를 저장
          this.setState({
              ItemList: data.data.ItemList,
              category: 'life'
          });
      })
      .catch(error => {
          console.log(error);
      });
}

var ItemCard=(props) => {

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        // avatar={ 나중에 writer 생기면 주석 풀기 -th
        //   <Avatar aria-label="recipe" className={classes.avatar}> {/*글 쓴 사람 동그란 프로필*/}
        //     {props.list.writer} 
        //   </Avatar>
        // }

        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.list.title}
        // subheader={props.list.date} 나중에 date 생기면 주석 풀기 -th
      />
      <Link to={'/item?id='+props.list.id} className="link_items">
      <CardMedia
        className={classes.media}
        image={props.list.src}
        title={props.list.title}
      />
      </Link>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.list.price}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon onClick={function(e){
            e.preventDefault();
            // 좋아요 누르기 구현
          }}>
          </FavoriteIcon>
          {props.list.FaNum}
        </IconButton>

        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

        <IconButton aria-label="add to">
        <FavorIcon type='button' ></FavorIcon>
        </IconButton>

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >

        <ExpandMoreIcon />
        </IconButton>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit> {/*상세설명*/}

        {/* <CardContent> 나중에 desc 생기면 주석 풀기 -th
          <Typography paragraph>{props.list.desc}:</Typography>
        </CardContent> */}

      </Collapse>
    </Card>
  );
}
export default ItemCard;