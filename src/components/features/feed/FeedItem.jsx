import React from 'react';
import Card from '../../common/Card';

const FeedItem = () => {
  return (
    <Card>
      <ReportContainer>
        <Ellipsis style={{ cursor: 'pointer' }} />
      </ReportContainer>
      <UserContainer>
        {user.profilePic}
        {user.nickname}
        <span>님이 다짐을 공유했습니다.</span>
      </UserContainer>
      <DajimContainer>{dajimContent}</DajimContainer>
      <InteractionContainer>
        <HeartContainer>
          <Heart />
          <HeartCount>2</HeartCount>
        </HeartContainer>
        <CommentContainer onClick={showCommentForm()}>
          <Comment />
          <CommentCount>2</CommentCount>
        </CommentContainer>
      </InteractionContainer>
      <CommentArea>
        <CommentList>
          <UserContainer>
            <Pic1 />
            <NicknameContainer>
              <NicknameSpan>XXXXX</NicknameSpan>
            </NicknameContainer>
          </UserContainer>
        </CommentList>
        <InputContainer>
          <CommentInput
            type="text"
            placeholder="댓글을 입력하세요"
            onChange={onChangeComment}
          />{' '}
          <Enter
            style={{
              cursor: 'pointer',
              position: 'absolute',
              right: '1rem',
              top: '.6rem',
            }}
          />
        </InputContainer>
      </CommentArea>
    </Card>
  );
};

export default FeedItem;
