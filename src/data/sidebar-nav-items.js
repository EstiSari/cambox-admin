export default function() {
  return [
    {
      title: "Dashboard",
      to: "/dashboard",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: ""
    },
    // {
    //   title: "Product",
    //   htmlBefore: '<i class="material-icons">vertical_split</i>',
    //   to: "/blog-posts",
    // },
    {
      title: "Products",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/products",
    },
    {
      title: "Transaction",
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: "/transaction",
    },
    //{
    //   title: "Tables",
    //   htmlBefore: '<i class="material-icons">table_chart</i>',
    //   to: "/tables",
    // },
    {
      title: "User",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/customers",
    },
    {
      title: "Courier",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/mitra",
    },
    {
      title: "Errors",
      htmlBefore: '<i class="material-icons">error</i>',
      to: "/errors",
    }
  ];
}
