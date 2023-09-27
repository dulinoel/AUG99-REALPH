WEBHOOK="https://hooks.slack.com/services/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" 

curl -X POST \
-H 'Content-type: application/json' \
--data '{ "channel": "#automation-notifs", 
            "username": "Realph Automation", 
            "icon_url": "https://real.ph/public/front/lib/images/favicon.png", 
            "text": "*'$CI_JOB_NAME'* has failed \n check logs here: '$CI_JOB_URL'", 
            "color": "danger", 
            "pretext": "Automation Test Status:" }' \
"$WEBHOOK"