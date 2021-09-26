//import { Fragment } from "react";

import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetUpDetails() {
  return (
    <MeetupDetail
      image='https://images.unsplash.com/photo-1583587067350-2c49115673c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
      title='First Meetup'
      address='Congo'
      description='The meetup description'
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup
  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://images.unsplash.com/photo-1583587067350-2c49115673c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        id: meetupId,
        title: "First Meetup",
        address: "Congo",
        description: "This is a first meetup",
      },
    },
  };
}

export default MeetUpDetails;
