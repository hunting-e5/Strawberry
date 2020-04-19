//승규 2020-04-09 20:48 수정

import React from './node_modules/react';
import { makeStyles } from './node_modules/@material-ui/core/styles';
import clsx from './node_modules/clsx';
import Card from './node_modules/@material-ui/core/Card';
import CardHeader from './node_modules/@material-ui/core/CardHeader';
import CardMedia from './node_modules/@material-ui/core/CardMedia';
import CardContent from './node_modules/@material-ui/core/CardContent';
import CardActions from './node_modules/@material-ui/core/CardActions';
import Collapse from './node_modules/@material-ui/core/Collapse';
import Avatar from './node_modules/@material-ui/core/Avatar';
import IconButton from './node_modules/@material-ui/core/IconButton';
import Typography from './node_modules/@material-ui/core/Typography';
import { red } from './node_modules/@material-ui/core/colors';
import FavoriteIcon from './node_modules/@material-ui/icons/Favorite';
import ShareIcon from './node_modules/@material-ui/icons/Share';
import ExpandMoreIcon from './node_modules/@material-ui/icons/ExpandMore';
import MoreVertIcon from './node_modules/@material-ui/icons/MoreVert';
import FavorIcon from"./FavorIcon";
import { Link } from "./node_modules/react-router-dom";

/* ItemCard는 ItemList로부터 item 객체를 props로 받는다.
  이때 item 객체는 json 형식이다.
  ItemCard는 item 객체의 key 값(writer, desc 등)에 따른 value("이규빈", "싸고 좋은 스쿠터")을 
  알맞은 위치에 ItemCard 형식으로 렌더링하는 컴포넌트이다.
*/

var ItemCard=(props) => {
  // props에서 DemandPost 카드에 사용될 내용을 담고 있는 key는 item 이며, json 형식이다.
  // 현재(20/04/19) 기준 item의 구성 요소 중, ItemCard에 나타나야하는 부분은 다음과 같다.
  let createdUserID = props.item.CreatedUserId;
  let demandPostCreatedDate = props.item.DemandPostCreatedDate;
  let demandPostId = props.item.DemandPostId;
  // let demandPostLocation = props.item.demandPostLocation;
  let demandPostPrice = props.item.DemandPostPrice;
  let demandPostTitle = props.item.DemandPostTitle;
  let description = props.item.Description;
  let imgSrc = props.item.ImgSrc;
  // let nego = props.item.nego;
  let postCategoryID = props.item.PostCategoryId;
  let numLikes = props.item.numLikes;

  // 스타일 설정
  const classes = useStyles();

  /* 초기에는 확장 설정을 off(즉, false)로 해둔다 */
  const [expanded, setExpanded] = React.useState(false);


  /* 확장 on/off 버튼 */
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // 디버깅
  console.log(props.item);


  return (
    
    <Card className={classes.root}>

      {/*글 쓴 사람 동그란 프로필*/}
      <CardHeader
        avatar={
          <Avatar aria-label="writer" className={classes.avatar}> 
            {createdUserID} 
          </Avatar>
        }

        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }

        title={demandPostTitle}
        subheader={demandPostCreatedDate}
      />

      <Link to={'/item?id=' + demandPostId} className="link_items">
      <CardMedia
        className={classes.media}
        image={imgSrc}
          title={demandPostTitle}
      />
      </Link>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {demandPostPrice}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>

        {/* 좋아요 누르기 구현 */}
        <IconButton aria-label="add to favorites">
          <FavoriteIcon onClick={function(e){
            e.preventDefault();
          }}>
          </FavoriteIcon>
          
          {numLikes}
        </IconButton>


        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

        <IconButton aria-label="add to">
        <FavorIcon type='button' ></FavorIcon>
        </IconButton>

        {/* expand 해서 상세설명 보기 */}
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

      {/*상세설명*/}
      <Collapse in={expanded} timeout="auto" unmountOnExit> 

        <CardContent>
          <Typography paragraph>{description}:</Typography>
        </CardContent>

      </Collapse>
    </Card>
  );
}

export default ItemCard;


const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
    padding: 10
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