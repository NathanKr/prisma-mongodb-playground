<h2>Motivation</h2>
Access mongodb using prisma via typescript

<h2>Points of interest</h2>
<ul>
<li>I have provided my computer ip In atlas->Network Access->IP access list. But looks like that after restart it is changing thus connecting to the cluster will not work. You need to get new ip  otherwise you get an error</li>
</ul>



<h2>Prisma Setup</h2>

install prisma cli

```
 npm -D i prisma

```

install prisma client
```
 npm -D i @prisma/client

```

initialized prisma : create prisma directory with schema.prisma file + .env file with DATABASE_URL
```
 npx prisma init

```


<h2>Typescript Setup</h2>
I am using the setup according to <a href='https://pris.ly/quickstart '>this</a>