import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



export default function OrderCard({content,date}) {
    return (
        <Card sx={{ minWidth: "275px" }}>
            <CardContent>
                <Typography sx={{ mb: 1.5 }} >
                  дата заказа {date}
                    <br/><br/><br/>
                </Typography>
                <Typography variant="body2">
                    {content}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">see more</Button>
            </CardActions>
        </Card>
    );
}
