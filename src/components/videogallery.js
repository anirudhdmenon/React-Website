import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function ImgMediaCard() {
  return (
    <Card sx={{ display: 'flex' }}>
        <div style={{textAlign: "center"}}>
            <CardMedia>
                <video
                    autoPlay
                    loop
                    muted
                    poster="https://assets.codepen.io/6093409/river.jpg"
                >
                    <source
                        src="https://assets.codepen.io/6093409/river.mp4"
                        type="video/mp4"
                    />
                </video>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet felis a ante semper 
                    ultrices at vel odio. Aenean fringilla quam risus, at aliquam nisl luctus eu. Duis fringilla congue 
                    augue, at interdum metus aliquet at. Cras dolor diam, auctor non imperdiet at, tristique non lectus. 
                    Quisque ultrices rhoncus arcu, in interdum lectus sagittis quis. Nulla ligula justo, fermentum et 
                    pellentesque eu, porta at eros. Nam maximus lorem ut erat euismod, vitae mollis erat dictum. Nullam 
                    a ligula eu turpis tempus pretium. Mauris sed turpis a lacus cursus dignissim. Nulla nec vulputate 
                    lorem. Donec placerat risus eu sem suscipit commodo. Phasellus fermentum ac risus nec blandit. In 
                    lobortis tempus tortor, eget fermentum tortor volutpat sit amet. Aliquam neque ex, hendrerit ut 
                    lectus quis, posuere ullamcorper purus.

                    In aliquam urna vitae est dignissim ornare. Phasellus purus metus, dapibus et lacus nec, imperdiet 
                    volutpat ante. Proin faucibus ante eget orci dapibus lobortis. Quisque id pulvinar ex. Phasellus mi 
                    tortor, tempor porta tellus ut, accumsan ultrices massa. Vivamus vestibulum elementum mi a viverra. 
                    Phasellus fringilla accumsan ultrices. Vivamus egestas mauris in elit eleifend egestas. Sed malesuada 
                    ligula justo, non laoreet mi pellentesque consequat. Pellentesque auctor tincidunt arcu, nec molestie 
                    sem tincidunt vel. Duis dignissim pulvinar porttitor. In viverra quam nec magna suscipit, in egestas 
                    nibh porttitor. Nulla placerat magna eu nisl ullamcorper lobortis.
                </Typography>
            </CardMedia>
        </div>
    </Card>
  );
}