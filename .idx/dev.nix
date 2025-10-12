{ pkgs, ... }: {
  # Which nixpkgs channel to use.
  channel = "stable-23.11"; # or "unstable"

  # Use https://search.nixos.org/packages to find packages
  packages = [
    pkgs.nodejs_20
  ];
  # Sets environment variables in the workspace
  env = {};

  # IDX-specific configuration
  idx = {
    # Search for extensions on https://open-vsx.org/
    extensions = [
      "vscodevim.vim"
      "esbenp.prettier-vscode"
      "dbaeumer.vscode-eslint"
    ];

    # Workspace lifecycle hooks
    workspace = {
      # Runs when a workspace is first created
      onCreate = {
        npm-install = "cd frontend && npm install";
      };
    };

    # Enable previews and customize configuration
    previews = {
      enable = true;
      previews = {
        web = {
          command = [ "sh" "-c" "cd frontend && npm run dev" ];
          manager = "web";
          env = {
            PORT = "$PORT";
          };
        };
      };
    };
  };
}
